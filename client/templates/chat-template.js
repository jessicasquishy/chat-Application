Template.appChat.helpers({
	messages: function() {
	return Messages.find({}, {sort: {createdAt: -1}, limit: 10})
	}
});

Template.appChat.events({
	"click .btnDelete": function (event) {
		Messages.remove(this._id);
		return false;
	},
	"keyup .Birthdate": function (event) {
		if (event.keyCode == 13){
			Messages.insert({
				StudentNumber: $(".StudentNumber").val(),
				Lastname: $(".Lastname").val(),
				Firstname: $(".Firstname").val(),
				Age: $(".Age").val(),
				Birthdate: $(".Birthdate").val(),
				createdAt: new Date()
			});
		}
	 $(".Birthdate").val(),
	 $(".Birthdate").focus();

		return false;
	}
});