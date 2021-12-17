class Slingshot {
    constructor(bodyA,pointB){
        var options={
    bodyA:bodyA,
    pointB:pointB,
    stiffness:0.1,
    length:10
     }
     this.rope=Constraint.create(options)
     this.pointB=pointB
     World.add (world,this.rope)
    }
    display(){
    if(this.rope.bodyA){
        var pos=this.rope.bodyA.position
        push()
        stroke(200,100,0)
        strokeWeight(4)
        line(pos.x,pos.y,this.pointB.x,this.pointB.y)
        
        pop()
    }
   
    }
    fly(){
  this.rope.bodyA=null
    }
}

    