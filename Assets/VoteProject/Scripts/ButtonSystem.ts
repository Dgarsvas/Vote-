
namespace game {

    /** New System */
    export class ButtonSystem extends ut.ComponentSystem {
        
        OnUpdate():void {

            this.world.forEach([ut.Entity, ut.UIControls.Button], (entity, Button) => {

                let state = ut.UIControls.Button.transition(this.world, entity);
        
                console.log(`${this.world.getEntityName(entity)} is at (${state})`);

        })    
    }   
}
}