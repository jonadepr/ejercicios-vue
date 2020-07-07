const app = new Vue({
    el: ".app",
    data: {
        message: "Mi lista de tareas en Vue",
        numeroTareas: 3,
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
            this.numeroTareas++;
        },

        completarTarea: function(tarea){
            tarea.completed = true;
        },

        BorrarTarea: function(tarea) {
            this.tareas = this.tareas.filter(i => i !== tarea);
            this.numeroTareas--;
        },

    },
    computed: {
        numeroTareas: function(){
            return this.numeroTareas;
        }
    }
})
