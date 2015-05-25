var schedule = new Array();

function addListItem(itemToAdd, timeAllotedToAdd, timeScheduledToAdd){
	if (timeScheduledToAdd.length < 0) {timeScheduledToAdd = null; }
	var itemHash = {
		name: itemToAdd,
		timeAlloted: timeAllotedToAdd,
		timeScheduled: timeScheduledToAdd
	};

	
	if(itemToAdd) {
		if (timeScheduledToAdd) {
			$('.listItems').append('<div class="input"><input type="checkbox" name="' + itemToAdd + '" class="item" value="' + itemToAdd + '" /> '+ itemToAdd + " " + timeAllotedToAdd + " minutes" +'</div>');
			$('.listItemInput').val('').focus();			
		}
		else {
			$('.listItems').append('<div class="input"><input type="checkbox" name="' + itemToAdd + '" class="item" value="' + itemToAdd + '" /> '+ itemToAdd + " " + timeAllotedToAdd + " minutes" +'</div>');
			$('.listItemInput').val('').focus();
			schedule.push(itemHash)
		}
	}
}



$(document).ready(function() {
    $('.listItemInput').focus();

    $(document)

    // Add to list
    .on('click', '.addToList', function() {

		addListItem($('input[name="listItemInput"]').val().trim(), $( "#listTimeAllotedInput" ).val(), $('input[name="listTimeScheduledInput"]').val().trim());
/*
		var listItem= $('input[name="listItemInput"]').val().trim();
		var timeAlloted = $('input[name="listTimeAllotedInput"]').val().trim();
		var timeScheduled = $('input[name="listTimeScheduledInput"]').val().trim()
		
        if (listItem) {
			if ( timeScheduled.length > 0) {
				addListItem(listItem, timeAlloted, timeScheduled);
			}
			else {
				addListItem(listItem, timeAlloted, null);
			}

		}
		
    })
    
	.keypress(function(e) {
		if(e.which == 13) {
			addListItem($('input[name="listItemInput"]').val().trim(), $('input[name="listTimeAllotedInput"]').val().trim(), $('input[name="listTimeScheduledInput"]').val().trim());
/*			
		var listItem= $('input[name="listItemInput"]').val().trim();
		var timeAlloted = $('input[name="listTimeAllotedInput"]').val().trim();
		var timeScheduled = $('input[name="listTimeScheduledInput"]').val().trim()
		
        if (listItem) {
			if ( timeScheduled.length > 0) {
				addListItem(listItem, timeAlloted, timeScheduled);
			}
			else {
				addListItem(listItem, timeAlloted, null);
			}

		}
	  	}
	*/	
	})
	
    // Remove from list
    .on('change', '.item', function() {
        if( $(this).is(':checked') ){
			var removeName = this.getAttribute("name");
			schedule = jQuery.grep(schedule, function(value) {
				console.log(value["name"]);
				console.log(value.name);
				return value["name"] != removeName;
			});
            var parentElem = $(this).parent();
            parentElem.effect('puff', 500, function() {
                parentElem.remove();
            });
        }
    });
    
    $('.addToListForm').submit( function(e) {
        e.preventDefault();
        
        return false;
    });
    
    // Make the list sortable
    $('.listItems').sortable();
    
    
});