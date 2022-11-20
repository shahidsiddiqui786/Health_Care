import template from './templates/base';

import App from './base/app';
import DemoController from './controller';
import InfermedicaApi from './health_api';
import Patient from './patient';

require('../node_modules/bootstrap/dist/css/bootstrap.min.css');
require('../node_modules/font-awesome/css/font-awesome.min.css');

require('./styles/styles.css');

export default class DemoApp extends App {
  constructor(el) {
    super(el, template);

    this.api = new InfermedicaApi('77c4cc0c', 'cc0fe852ea63ee2573c9f0542b3e9d91');

    this.patient = new Patient();

    this.currentStep = 0;

    this.views = [
      {
        context: {
          api: this.api
        },
        view: 'landing'
      },
      {
        context: {
          patient: this.patient
        },
        view: 'first_view'
      },
      {
        context: {
          api: this.api,
          patient: this.patient
        },
        view: 'naturallangugaeprocessing'
      },
      {
        context: {
          api: this.api,
          patient: this.patient
        },
        view: 'familiar_risk'
      },
      {
        context: {
          api: this.api,
          patient: this.patient
        },
        view: 'recommendation'
      },
      {
        context: {
          api: this.api,
          patient: this.patient
        },
        view: 'travelling_risk'
      },
      {
        context: {
          api: this.api,
          patient: this.patient
        },
        view: 'inquired'
      },
      {
        context: {
          api: this.api,
          patient: this.patient
        },
        view: 'analysis_report'
      }
    ];
  }

  afterRender() {
    this.nextButton = this.el.querySelector('#next-step');
    this.nextButton.addEventListener('click', (e) => this.nextStep(e));
  }

  startInterview() {
    this.controller = new DemoController(this.el.querySelector('#step-container'));

    const currentView = this.views[this.currentStep];
    this.controller.setView(currentView.view, currentView.context);
  }

  nextStep() {
    this.currentStep += 1;
    this.currentStep %= 8;

    const currentView = this.views[this.currentStep];

    this.controller.destroyView();
    this.controller.setView(currentView.view, currentView.context);
  }
}
