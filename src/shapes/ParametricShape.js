import * as THREE from "three";
import { ParametricGeometry } from 'three/addons/geometries/ParametricGeometry.js';

import { defaultColors, jointGeometry } from "../globals.js";



// parametric surface
class ParametricShape extends THREE.Group {

	constructor( texture, color, func, uDivisions = 3, vDivisions = 3 ) {

		super();
		var obj = new THREE.Mesh(
			new ParametricGeometry( func, uDivisions, vDivisions ),
			new THREE.MeshStandardMaterial(
				{
					color: color,
					map: texture,
					side: THREE.DoubleSide,
					roughness: 1,
					metalness: 0,
				} )
		);
		obj.receiveShadow = true;
		obj.castShadow = true;
		this.add( obj );

	} // ParametricShape.constructor

	addSphere( radius, y, x = 0, z = 0 ) {

		var s = new THREE.Mesh( jointGeometry,
			new THREE.MeshStandardMaterial(
				{
					color: defaultColors[ 3 ],
				} ) );
		s.castShadow = true;
		s.receiveShadow = true;
		s.scale.setScalar( radius );
		s.position.set( x, y, z );
		this.add( s );
		return s;

	} // ParametricShape.addSphere

	recolor( color, secondaryColor = color ) {

		this.children[ 0 ].material.color.set( color );
		if ( this.children.length>1 ) {

			this.children[ 1 ].material.color.set( secondaryColor );

		}

	}

} // ParametricShape


export { ParametricShape };
