
try {
    /*var element = EMBED.getRootElement();
    
    const userConfig = EMBED.getComponent().schema.data

    var json = userConfig.jsonfile.file // this is the file uploaded 
    json = (json.split(",").pop()); 
    console.log(json)
    json = atob(json)
    console.log(json)                    // prints out expected result, decoded json from base64*/
    let q;
    var navbar = $(document).find("#navigationDiv");

    function makeUL(lst, topLevelUl, rootLvl) {
        console.log("Make ul")
        var html = [];
        if (topLevelUl) {
            html.push('<ul class="nav navbar-nav" id="menu">');
            topLevelUl = false;
        } else {
            html.push('<ul class= "dropdownContent">' );
        }
        $(lst).each(function () {
            html.push(makeLI(this, topLevelUl, rootLvl))
        });
        html.push('</ul>');
        rootLvl = true;
        return html.join("\n");
    }

    function makeLI(elem, topLevelUl, rootLvl) {
        console.log("make Li")
        var html = [];
        if(elem.float === 'right'){
            
        }
        if (elem.children) {
            html.push('<li class="dropdown-container listElement" id = "'+ elem.id + '">');
            if(elem.icon){
                html.push('<img src = "'+ elem.icon +'" style = "height: 20px">');
            }
            if(elem.value) {
                html.push(elem.value);
            }
        } else {
            html.push('<li class="listElement" id = "'+ elem.id +'">');
            rootLvl = false;
        }
        //html.push(elem.link);
        if (elem.href) {
            html.push('<a class = "dropdown padded" href="' + elem.href + '">')
            if(elem.icon){
                html.push('<img src = "'+ elem.icon +'" style = "height: 20px">');
            }
            if(elem.value) {
                html.push(elem.value);
            }
            html.push('</a>')
            //<i style='height:20px; width:20px;' class='" + submenuData[i]["icon"] + "'></i>"
        }

        if (elem.children) {
            html.push(makeUL(elem.children, topLevelUl, rootLvl));
        }
        html.push('</li>');
        return html.join("\n");
    }

    $(function () {
        var topLevelUl = true;
        q.enqueue()
        $.getJSON("nav.json", function(data) {
            $("#navigationDiv").html(makeUL(data.memberMenu, topLevelUl, true));  
        });
        navbar.innerHTML = navbar;
        console.log(navbar)
    });
}
catch (e){
    console.log(e)
}