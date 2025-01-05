# Consistency Guidelines

This document outlines the standard formats for the project.

## Importing

### General Guidelines

1. **Import Order**:
   - **Modules**: Import entire modules first using the `import * as` syntax.
   - **Classes**: Import specific classes after the modules.
   - **Functions**: Import specific functions using destructuring.
   - **Types**: Import specific types after functions.
   - **Data**: Import data last.

1. **Separation**:
   - Use a single empty line to separate each group of imports (Modules, Classes, Functions, Types, Data).

1. **Syntax**:
   - Modules:
   ```TypeScript
   import * as moduleName from "moduleName";
   ```
   - Functions, Classes, and Types:
   ```TypeScript
   import { something } from "location";
   ```

### Example Structure

Below is an example demonstrating the proper order and formatting of imports:

```typescript
// Import modules
import * as fs from "fs";
import * as path from "path";

// Import classes
import { Person, Building, Event } from "./classes";

// Import functions
import { function1, function2 } from "./functions";

// Import types
import { Race, PersonData } from "./types";

// Import Data
import { OrcStats } from "./data"
```

<br>

## Type Guidelines

1. **Naming Conventions**
   - All project-specific types and interfaces must use PascalCase.

1. **Strong Typing**:
   - Use `unknown` instead of `any` wherever possible to enforce type checking.
   - Avoid overusing `any` as it bypasses TypeScript's type system and causes unexpected errors.

1. **Arrays**:
   - Use the `T[]` syntax (e.g., `string[]`) instead of `Array<T>` unless there is a specific reason to prefer the latter.

1. **Example**:

```typescript
// Example of strongly typed variables
let userIds: number[] = [1, 2, 3];
let config: unknown; // Use `unknown` for untyped data that will later be refined
```

<br>

## Class Guidelines

1. **Naming Conventions**
   - All project-specific classes must use PascalCase, but the objects of the classes must start with a lower case letter.

1. **File Structure**
   - Each class must have its own file.
   - The file name should match the class in PascalCase.

1. **Field Security**
   - All fields must be private, unless there is a reason for it to not be private.
   - All fields must have strictly defined types, unless there is a reason not to.

1. **Getter and Setter Methods**:
   - All fields must have getter and setter methods.
   - Fields that are immutable (e.g., IDs or hardcoded data) should not have setter methods.
   - For complex fields (e.g., objects), define methods to change only the necessary portions, if required.

1. **Immutability**:
   - Avoid mutating data directly within the class. Use controlled methods for any modifications.

<br>

## Function Guidelines

1. **Function Definition Format**:
   - **Standard Functions**: Use the following format for simple functions:
     ```typescript
     function name(params: ...any[]): any {}
     ```
   - **Memoized, Aftered, Befored, and Manipulated Functions**: If the function is manipulated in its definition (e.g., memoized, aftered, befored), define it using the following format:
     ```typescript
     const name: (params: ...any[]) => any = manipulatingFunction((params: ...any[]) => any): any => {})
     ```

2. **Function Naming**:
   - Function names must be descriptive and use camelCase.

3. **Parameters**:
   - Use `...any[]` for functions that accept a variable number of parameters, unless specific types are required.

4. **Return Type**:
   - Explicitly define the return type when applicable, otherwise use `any`.

### Example Function Definitions

#### Standard Function
```typescript
function calculateSum(a: number, b: number): number {
  return a + b;
}
```
#### Manipulated (Memoized) Function

```TypeScript
const memoizedCalculateSum: (a: number, b: number) => number = memoize(
  (a: number, b: number) => a + b
);
```
