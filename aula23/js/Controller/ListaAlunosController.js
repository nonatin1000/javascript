class ListaAlunosController{
    constructor(model, view){
        this.model = model;
        this.view = view;
        
        this.view.$seletor.addEventListener('click', this.editarAluno.bind(this));
    }
    
    editarAluno(e){
        console.log(e.target);
        console.log(e.currentTarget);
        console.log(this);
        
        let target = e.target;
        
        while(target !== e.currentTarget){
            if (target.getAttribute('data-id')){
                break;
            }
            target = target.parentNode;
        }
        console.log('----')
        console.log(target)
        
        if(target){
            let _id = parseInt(target.getAttribute('data-id'));
            let _notas = prompt('digite as novas notas separadas por virgula');
            
            if(!_notas) return;
            
            _notas = _notas.split(',').map( nota => parseFloat(nota) );
            console.log(_notas)
            
            let aluno = this.model.obterPorId(_id);
            aluno.atualizarNotas(_notas);
            
            this.view.atualiza(this.model);
        }
    }
    
    adicionarAluno(nome, notas){
        this.model.adicionarAluno( new Aluno(nome, notas) )
        this.view.atualiza(this.model)
    }
    
    atualizaLista(alunos){
        this.view.atualiza(alunos);
    }
    
    limparFiltro(){
        this.view.atualiza(this.model);
    }
}