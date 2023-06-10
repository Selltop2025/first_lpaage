


export namespace Ex {
    export   function  notNull<T>(e:T){
       if(e == null){
               throw ("Erro,Objeto nulo")
       } else {
           return e
       }

    }
}