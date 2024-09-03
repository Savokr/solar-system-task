import { BufferGeometry, Camera, MathUtils, Mesh, MeshBasicMaterial, MeshPhysicalMaterial, Object3D, SphereGeometry, TextureLoader } from "three"; //@ts-ignore
import { Text } from "troika-three-text";

type PlanetParams = {
    name?: string;
    radius: number;
    textureSrc: string;
    rotationSpeed?: number;
    customMaterial?: MeshBasicMaterial;
}

export class Planet extends Object3D {

    isRotating: boolean = true;
    isOrbiting: boolean = true;

    private _planetMesh: Mesh<BufferGeometry, MeshPhysicalMaterial | MeshBasicMaterial>;
    private _rotationSpeed: number;
    private _textObject: Text;

    constructor({ name = '', radius, textureSrc, rotationSpeed = 0.01, customMaterial}: PlanetParams) {
        super();

        const planetMesh = this.createMesh(radius, textureSrc, customMaterial);
        const text = this.createText(name, radius);

        this.add(planetMesh);
        planetMesh.add(text);

        planetMesh.userData.planet = this;
        
        this._planetMesh = planetMesh;
        this._textObject = text;
        this._rotationSpeed = rotationSpeed;
    }

    updateAnimation(camera: Camera) {
        this._textObject.lookAt(camera.position);

        if (this.isRotating) {
            this.rotation.y += this._rotationSpeed;
        }
    }

    get mesh() {
        return this._planetMesh;
    }

    get textObject() {
        return this._textObject;
    }

    private createText(name: string, planetRadius: number) {
        const text = new Text();
        text.text = name;
        text.fontSize = MathUtils.clamp(0.5*planetRadius, 0.2, 0.7);
        text.color = 'white';
        text.fontWeight = 'bold';
        text.position.set(0, -planetRadius*1.1, 0);
        text.anchorX = 'center';

        return text;
    }

    private createMesh(radius: number, textureSrc: string, customMaterial?: MeshBasicMaterial) {
        const texture = new TextureLoader().load(textureSrc);
        const geometry = new SphereGeometry(radius, 32, 32);
        
        let material: MeshBasicMaterial | MeshPhysicalMaterial | undefined = customMaterial;

        if (!material) {
            material = new MeshPhysicalMaterial({ map: texture });
        } else {
            material.setValues({ map: texture });
        }

        const mesh = new Mesh(geometry, material);

        mesh.castShadow = true;
        mesh.receiveShadow = true;

        return mesh;
    }
}