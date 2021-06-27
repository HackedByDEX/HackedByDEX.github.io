$.getJSON(
    "/js/accounts.json",
    function (data, textStatus, jqXHR) {
        if (textStatus != 'success'){
            alert(textStatus)
        }
        else{
            for (let item of data){
                /*
                                ID:      #${item.id}
                Skins:   ${item.skins}
                Vbucks:  ${item.vbucks}
                Created: ${item.created}
                Images: 
                ${media}
                */
                $('.card-container').prepend(`
            <div class="card">
                <header class="article-header">
                    <div>
                        <div class="category-title">
                            Created:
                            <span class="date">${item.created}</span>
                        </div>
                    </div>
                    <div class="article-title">
                        ${item.notes}
                    </div>
                    <br>
                    <img src="${item.thumbnail}" style="height: 40vh;border-radius:16px;">
                </header>
                <div class="author">
                    <div class="profile"></div>
                    <div class="info">
                        <div class="caption">By</div>
                        <div class="name">HackedByD3x</div>
                    </div>
                </div>
                <div class="tags" style="background-color: #100e17;">
                    <div>VBucks: ${item.vbucks}</div>
                    <div>Skins:  ${item.skins}</div>
                    <div>Emotes: ${item.emotes}</div>
                </div>
            </div>`)
            }
        }
    }
);