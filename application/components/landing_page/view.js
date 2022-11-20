import View from '../../base/view';
import template from './template';

export default class LandingView extends View {
  constructor(el, context) {
    super(el, template, context, null);
    this.context.api.generateInterviewId();
  }
}
