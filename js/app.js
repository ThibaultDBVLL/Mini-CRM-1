$(document).ready(function(){

        $ajax({
                url:"../data/crm.json",
                success : (function(data){
                    var client = data.customers;
                    console.log(client);
                    for(var i = 0; i < client.length; i++){
                    var customer = (client[i].first_name + '<br>' + client[i].last_name + '<br>' + client[i].email + '<br>' + client[i].phone + '<br>' + client [i].description);
                    console.log(customer);
                    $("#info").append("client" + '<br>' + customer);
                }
            })
        });
    });
