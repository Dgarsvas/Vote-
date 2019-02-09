
namespace game {

    export class XMLInitializationFilter extends ut.EntityFilter {
        node: ut.Core2D.TransformNode;
        position?: ut.Core2D.TransformLocalPosition;
        rotation?: ut.Core2D.TransformLocalRotation;
        scale?: ut.Core2D.TransformLocalScale;
    }

    export class XMLInitialization extends ut.ComponentBehaviour {

        data: XMLInitializationFilter;

        // ComponentBehaviour lifecycle events
        // uncomment any method you need
        
        // this method is called for each entity matching the XMLInitializationFilter signature, once when enabled
        //OnEntityEnable():void { }
        
        // this method is called for each entity matching the XMLInitializationFilter signature, every frame it's enabled
        //OnEntityUpdate():void { }

        // this method is called for each entity matching the XMLInitializationFilter signature, once when disabled
        //OnEntityDisable():void { }

    }
}
