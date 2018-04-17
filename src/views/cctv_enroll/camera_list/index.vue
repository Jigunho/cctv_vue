<template>

<div>
    <div>
        <h1>camera 목록</h1>
    </div>
    <div id="list-table">
        <table>
            <thead>
                <tr>
                    <th v-for="col in columns":key="columns">
                        {{ col }}
                    </th>
                </tr>

            </thead>
            <tbody>
                <tr v-for="row in list":key="list">
                    <td v-for="col in columns":key="columns">
                        {{ row[col] }}
                    </td>
                </tr>
            </tbody>

        </table>
    </div>
    
</div>
</template>


<script>

export default{

    data () {

        return {
            list : [
                {id : 1, name : 'aa' , image : 'aaad.jpeg'},
                {id : 2, name : 'aa' , image : 'aaad.jpeg'},
                {id : 3, name : 'aa' , image : 'aaad.jpeg'}
            ]
        }
    },
    
    methods : {
        makeTable : function() {
            var len = this.list.length
        }
    },
    computed : {
        "columns": function() {
            if(this.list.length == 0){
                return []
            }
            return Object.keys(this.list[0])
        }
    },

    created : function() {
        this.makeTable()
    }
}

</script>