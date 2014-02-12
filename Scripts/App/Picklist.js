var PickList=(function(){    
	
	 var bindData=function (obj) {
        $('#searchID').val(($(obj).find('span').text()));
        $('#searchDescription').val($(obj).parent().parent().find('span[class*="SrNo"]').text());

    };
	var getPickList=function () {
       
        var data = [{ ID: 1, SrNo: 123 }, { ID: 2, SrNo: 456 }, { ID: 3, SrNo: 789 }, { ID: 4, SrNo: 91011 }, { ID: 5, SrNo: 121314 }];
        $('#picklist').html('');
        for (i = 0; i < data.length ; i++) {
            var tr = '<tr class="ID" > ';
            tr += '<td><a data-dismiss="modal" href="#" onclick="javascript: PickList.appendData(this); "><span class="ID">' + data[i].ID + '</span></a></td>';
            tr += '<td><span class="SrNo">' + data[i].SrNo + '</span></td>';
            tr += '</tr>';
            $('#picklist').append(tr);
            $('divGrid').show();
        }
    }
	return{
	showPickList:getPickList,
	appendData:bindData
	}
   }());
