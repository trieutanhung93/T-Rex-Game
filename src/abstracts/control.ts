export class Control {
    static keys = {};
    handleInput(){
        document.addEventListener('keydown', function(event: KeyboardEvent){
            Control.keys[event.code] =true;
        });
        
        document.addEventListener('keyup', function(event: KeyboardEvent){
            Control.keys[event.code] =false;
        });
    }
}