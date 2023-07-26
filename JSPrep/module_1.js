// VAR LET CONST

/**
 * 1. Scoping
 * - Global, Functional, Block
 * - let, const -> block
 * - var -> global
 *
 * 2. Vairble Shadowing
 * - let can not be shadow by var but var can be shadowed by let.
 *
 * 3. Declaration
 * - var can be reclared in given scope but let, const can not be.
 *
 * 4. Declaration without initialization
 * - const can not be declared without initialization.
 *
 * 5. Re-Initialization
 * - var, let can be but const can not be reinitialized.
 */

/**
 * Hoisting: during creation phase - variables and function moved to top of code
 *
 * 1. JavaScript Execution Context
 *
 * - Creation Phase: create global/window object -> setup memory heap for storing function references/variables -> intializes variables with undefined and function with their complete body
 * - Execution Phase: executes line by line and assigns values to variables
 *
 * 2. Temporal Dead Zone: state where variables are in score but not declared.
 * - let, const are hoisted to temporal dead zone
 */
