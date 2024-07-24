import { Mannequin } from './Mannequin.js';


class Male extends Mannequin {

	constructor( height = 1 ) {

		super( false, height );
		this.body.position.y = 3.8;

		this.l_leg.straddle += 6;
		this.r_leg.straddle += 6;

		this.l_ankle.turn += 6;
		this.r_ankle.turn += 6;

		this.l_ankle.tilt += 6;
		this.r_ankle.tilt += 6;

	} // Male.constructor

} // Male




export { Male };