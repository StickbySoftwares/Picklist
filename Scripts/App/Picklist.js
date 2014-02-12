    function getPickList() {
        var data = DataService.getData();
        $('#picklist').html('');
        for (i = 0; i < data.length ; i++) {
            var tr = '<tr class="ID" > ';
            tr += '<td><a data-dismiss="modal" href="#" onclick="javascript: appendData(this); "><span class="ID">' + data[i].ID + '</span></a></td>';
            tr += '<td><span class="SrNo">' + data[i].SrNo + '</span></td>';
            tr += '</tr>';
            $('#picklist').append(tr);
            $('divGrid').show();
        }
    }
    function appendData(obj) {
        $('#searchID').val(($(obj).find('span').text()));
        $('#searchDescription').val($(obj).parent().parent().find('span[class*="SrNo"]').text());

    }
