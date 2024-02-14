import * as THREE from 'three';

class Galaxy{
    constructor(n_dot,branches,radius, spin){
        this.n_dot = n_dot;
        this.branches = branches;
        this.radius = radius;
        this.spin = spin;
    }

    createGalaxy(colorIn, colorEx){
        
        const color_in = new THREE.Color(colorIn);
        const color_ex = new THREE.Color(colorEx);
    
        const position = new Float32Array(this.n_dot*3);
        const color = new Float32Array(this.n_dot*3);

        for(let i = 0;  i< this.n_dot; i++){
            const i3 = i*3;
            const branchAngle = ((i%this.branches)/this.branches)*(Math.PI*2);
            const radius = Math.pow(Math.random(),2)*this.radius;
            const spin = radius + this.spin;

            const currentColor = color_in.clone();
            currentColor.lerp(color_ex, radius/this.radius);

            const randX =   Math.pow(Math.random(),2)*
                            (Math.random() < 0.5 ? 1 : -1)*
                            radius*0.1;
            const randY = Math.pow(Math.random(),2)*(Math.random() < 0.5 ? 1 : -1)*radius*0.1;
            const randZ = Math.pow(Math.random(),2)*(Math.random() < 0.5 ? 1 : -1)*radius*0.1;

            position[i3] = Math.cos(branchAngle + spin)*radius + randX;
            position[i3+1] = randY;
            position[i3+2] = Math.sin(branchAngle + spin)*radius + randZ;

            color[i3] = currentColor.r;
            color[i3+1] = currentColor.g;
            color[i3+2] = currentColor.b;
        }

        const pointGeometry = new THREE.BufferGeometry();
        const pointMaterial = new THREE.PointsMaterial({
            size: 0.02,
            sizeAttenuation: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
            vertexColors: true
        });

        pointGeometry.setAttribute('position', new THREE.BufferAttribute(position, 3),);
        pointGeometry.setAttribute('color', new THREE.BufferAttribute(color, 3));

        const points = new THREE.Points(pointGeometry, pointMaterial);
        return points;
    }
}

export default Galaxy;