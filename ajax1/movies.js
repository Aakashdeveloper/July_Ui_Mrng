const moviesUrl = "https://ngmovies.herokuapp.com/api/getMovies";

function showMovies(){
    alert('hiii');
    $.ajax({
        url: moviesUrl,
        type:'GET',
        dataType:'json',
        success:function(data){
            for(i=0;i<data.length;i++){
                $('#moviesList').append(data[i].name+"<br/>")
            }
        }
    })
}
