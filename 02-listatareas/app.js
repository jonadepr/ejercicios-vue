const app = new Vue({
    el: ".app",
    data: {
        message: "Mi lista de tareas en Vue",
        tareas: [
            {
                completed: false,
                texto: "mirar trello"
            },
            {
                completed: false,
                texto: "editar linkedin"
            },
            {
                completed: false,
                texto: "crear imagen de windows"
            }
        ],
        newTarea: ""
    },
    methods: {
        addTareaYBorra: function(){
            this.tareas.push({completed:false, texto: this.newTarea});
            this.newTarea="";
        },

        completarTarea: function(tarea){
            tarea.completed = true;
        },



    },
    computed: {

    }
})
