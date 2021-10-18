import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { group_perms_by_model } from 'papermerge/utils';


class EditRoleComponent extends Component {
  @service store;
  @service router;

  permission_states = [];

  get permission_groups() {
    return group_perms_by_model(this.args.all_permissions);
  }

  @action
  onSubmit() {
    let role = this.args.role;

    role.save();
    this.router.transitionTo('roles');
  }
}

export default EditRoleComponent;
