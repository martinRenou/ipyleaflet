// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

const L = require('../leaflet.js');
const control = require('./Control.js');

export class LeafletSearchControlModel extends control.LeafletControlModel {
  defaults(){
    return{
      _view_name: 'LeafletSearchControlView',
      _model_name: 'LeafletSearchControlModel',
      layer: null,
    };
  }
}

// LeafletSearchControlModel.serializers = {
//   ...control.LeafletControlModel,
//   layer: { deserialize: widgets.unpack_models },
// };

export class LeafletSearchControlView extends control.LeafletControlView{
  initialize(parameters) {
    super.initialize(parameters);
    this.map_view = this.options.map_view;
    console.log("sachin DEBUGGING................");
    console.log(this.model.get('layer'));
  }

  create_obj() {
    console.log("sachin DEBUGGING................");
    console.log(this.model.get('layer'));
    this.obj = L.control.search(this.get_options());
    console.log(Object.keys(this.obj));
    // this.obj.setLayer(this.model.get('layer'));
  }

  get_options() {
    console.log("kharude DEBUGGING................");
    console.log(this.model.get('layer'));
    const options = super.get_options();
    options['layer'] = this.model.get('layer');
    console.log(this.model.get('layer').constructor.name);
    console.log(Object.keys(options['layer']));
    return options;
  }
}