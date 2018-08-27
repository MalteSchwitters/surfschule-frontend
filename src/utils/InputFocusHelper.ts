export default class InputFocusHelper {
    private static focusedComponent: any;

    public static focusComponent(component: any) {
        if (InputFocusHelper.focusedComponent != null) {
            InputFocusHelper.focusedComponent.cancel();
        }
        InputFocusHelper.focusedComponent = component;
    }

    public static hasFocus(component: any) {
        return InputFocusHelper.focusedComponent === component;
    }
}
