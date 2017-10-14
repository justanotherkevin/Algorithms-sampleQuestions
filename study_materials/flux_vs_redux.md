#### Flux vs Redux

Flux is an architectural pattern, its purpose is to control derived data so that multiple components can interact with the data without risking pollution   

Action --> Dispatcher --> Store --> View

Both Flux and Redux have Actions. In Flux, an action is a simple JavaScript object, and that’s the default case in Redux too, but when using Redux middleware, actions can also be functions and promises.

  * With Flux it is a convention to have multiple stores per application; each store is a singleton object.   
  * In Redux, the convention is to have a single store per application,

##### Flux
Flux application can have **multiple stores** and the dependencies between those stores need a single manager,

##### Redux
Redux has **no dispatcher** entity. Instead, the store has the dispatching process baked in. A Redux store exposes a few simple API functions, one of them is to dispatch actions.
