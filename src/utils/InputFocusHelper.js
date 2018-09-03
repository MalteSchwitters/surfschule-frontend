export default class InputFocusHelper {
    static focusComponent(component) {
        if (InputFocusHelper.focusedComponent != null) {
            InputFocusHelper.focusedComponent.cancel();
        }
        InputFocusHelper.focusedComponent = component;
    }
    static hasFocus(component) {
        return InputFocusHelper.focusedComponent === component;
    }
}
//# sourceMappingURL=InputFocusHelper.js.map