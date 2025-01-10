import { Person, ILocation, Memory } from "../../classes"

import { Rememberable, Perception, basePerception } from "../../../types"

//this stage is when this person gets a perception of everything around him

//this will be what each person thinks about what everyone around them are like, will be helpful in the future
export const crowd_perceptions: Map<Person,Perception> = new Map<Person,Perception>();

function dampen(value: number, magnitude: number): number {
    if(value < 0){
        return -Math.pow(-value,magnitude);
    } else {
        return Math.pow(value,magnitude);
    }
}

export function stage1(person: Person): void {
    let memories: Map<Rememberable,Memory> = person.memories;
    let location: ILocation = person.location;

    let crowd_perception: Perception = Object.assign({}, basePerception);

    location.people.forEach(other_guy => {
        if(other_guy === person){ return; } //skips our guy

        //the perception that this guy is giving off right now
        let current_perception: Perception = Object.assign({}, basePerception);
        
        //this first loop gets all perception
        other_guy.modifiers.forEach(modifier => {
            if(!memories.has(modifier)){
                //make new memory for that modifier with no perception
                let new_memory: Memory = new Memory(modifier, Object.assign({}, basePerception));
                memories.set(modifier, new_memory);
            } else {
                for(const key of Object.keys(current_perception) as (keyof Perception)[]) {
                    //this equation can and probably should be changed later
                    current_perception[key] += memories.get(modifier)!.perception[key];
                }
            }
        });

        let other_guy_memory: Memory | undefined = memories.get(other_guy);

        if(other_guy_memory != undefined){
            //compare our current perception of this guy with our old and change accordingly
            for(const key of Object.keys(current_perception) as (keyof Perception)[]) {
                let difference: number = current_perception[key] - other_guy_memory.perception[key];
                
                //we dont want our perception of the guy be changing too much every time we see them
                difference = dampen(difference, 1/3);

                other_guy_memory.perception[key] += difference;
            }
        } else {
            //if we have no perception of this guy, our current perception will be our own perception of him
            let new_memory: Memory = new Memory(other_guy, current_perception);
            memories.set(other_guy, new_memory);

            other_guy_memory = new_memory;
        }

        //this second loop changes all perception of the modifiers based on how we think about our guy
        other_guy.modifiers.forEach(modifier => {
            for(const key of Object.keys(current_perception) as (keyof Perception)[]) {
                let difference: number = other_guy_memory.perception[key] - memories.get(modifier)!.perception[key];
                
                //we dont want our perception of modifiers be changing too much for every person seen
                difference = dampen(difference, 1/4);

                memories.get(modifier)!.perception[key] += difference;
            }
        });

        for(const key of Object.keys(current_perception) as (keyof Perception)[]) {
            crowd_perception[key] += memories.get(other_guy)!.perception[key];
        }

        crowd_perceptions.set(person, crowd_perception)
    });
}