import { Person, ILocation, Memory } from "../../classes"

import { CurrentSimulationInfo , Perception, basePerception } from "../../../types"

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

export function stage1(person: Person, info: CurrentSimulationInfo): void {
    let memories: {[key: string]: Memory} = person.memories;
    let location: ILocation = info.locations[info.sim_map[person.location[0]][person.location[1]]];

    let crowd_perception: Perception = Object.assign({}, basePerception);

    location.people.forEach(other_guy_id => {
        let other_guy: Person = info.people[other_guy_id]
        if(other_guy === person){ return; } //skips our guy

        //the perception that this guy is giving off right now
        let current_perception: Perception = Object.assign({}, basePerception);
        
        //this first loop gets all perception
        (other_guy.modifiers || []).forEach(modifier_id => {
            if(modifier_id in memories){
                //make new memory for that modifier with no perception
                let new_memory: Memory = new Memory(modifier_id,{}, Object.assign({}, basePerception));
                memories[modifier_id] = new_memory;
            } else {
                for(const key of Object.keys(current_perception) as (keyof Perception)[]) {
                    //this equation can and probably should be changed later
                    current_perception[key] += memories[modifier_id].perception[key];
                }
            }
        });

        let other_guy_memory: Memory | undefined = memories[other_guy_id];

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
            let new_memory: Memory = new Memory(other_guy_id, {}, current_perception);
            memories[other_guy_id] = new_memory;

            other_guy_memory = new_memory;
        }

        //this second loop changes all perception of the modifiers based on how we think about our guy
        (other_guy.modifiers || []).forEach(modifier_id => {
            for(const key of Object.keys(current_perception) as (keyof Perception)[]) {
                let difference: number = other_guy_memory.perception[key] - memories[modifier_id].perception[key];
                
                //we dont want our perception of modifiers be changing too much for every person seen
                difference = dampen(difference, 1/4);

                memories[modifier_id].perception[key] += difference;
            }
        });

        for(const key of Object.keys(current_perception) as (keyof Perception)[]) {
            crowd_perception[key] += memories[other_guy_id].perception[key];
        }

        crowd_perceptions.set(person, crowd_perception)

        console.log(crowd_perceptions)
        console.log(memories)
    });
}