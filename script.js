getList(); 
    $("#list").on("click","a", function(){
        var title=$(this).attr("title");
        var authors=$(this).attr("authors");
        var price=$(this).attr("price");
        var contents=$(this).attr("contents");
        var image=$(this).find("img").attr("src");
        $("#title").html(title);
        $("#image").attr("src", image);
        $("#authors").html(authors+"("+price+"원)");
        $("#contents").html(contents);
    });
    $("#btnMore").on("click", function(){
        size += 5;
        getList();
    });
    function getList(){
        var query=$("#txtQuery").val();
        $.ajax({
            type:"get",
            url: url,
            data: {"query":query, "size":size},
            dataType: "json",
            headers: {"Authorization": "KakaoAK d3ddfc03751730ccdffaedd440d93708"},
            success:function(data){
                var temp=Handlebars.compile($("#temp").html());
                $("#list").html(temp(data)).listview("refresh");
            }
        });
    }