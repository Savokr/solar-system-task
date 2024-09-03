import { Object3D } from "three";
import { Planet } from "./Planet";

type OrbitParams = {
    planet: Planet;
    radius: number;
    orbitSpeed: number;
    planetOrbit?: Orbit;
  }
  
  export class Orbit extends Object3D {
    private _planet: Planet;
    private _orbitSpeed: number;
  
    constructor({planet, radius, orbitSpeed, planetOrbit}: OrbitParams) {
      super();
  
      this.add(planet);
      planet.position.set(radius, 0, 0); // Position the planet at the edge of it's orbit
      
      if (planetOrbit !== undefined) {
        planetOrbit.position.set(radius, 0, 0); // Position the planet's orbit at the same place if it exists
        this.add(planetOrbit);
      }
  
      this._planet = planet;
      this._orbitSpeed = orbitSpeed;
    }
  
    updateAnimation() {
      if (this._planet.isOrbiting) {
        this.rotation.y += this._orbitSpeed;
      }
    }
  }
  