(function () {
  // Application namespaces
  window.App = {
    Models: {},
    Collections: {},
    Views: {},
    Router: {}
  };
  // helper
  window.template = function (id) {
    return _.template($('#' + id).html());
  };

  App.Router = Backbone.Router.extend({
    routes: {
      '': 'index',
      'appointment/:id': 'showAppointment'
    },

    index: function () {
      console.log('index');
    },

    showAppointment: function (appointmentId) {
      console.log(appointmentId);
    }

  });

  new App.Router();
  Backbone.history.start();

  return App;
})();
