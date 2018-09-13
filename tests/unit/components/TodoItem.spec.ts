import { shallowMount, Wrapper } from "@vue/test-utils";
import TodoItem from "@/components/TodoItem.vue";

describe("TodoItem.vue", () => {
  let id: Number;
  let title: string;
  let isCompleted: boolean;
  let onClick: Function;
  let wrapper: Wrapper<TodoItem>;

  // Montamos el componente con los props necesarios antes de cada test.
  beforeEach(() => {
    id = 1;
    title = "Test Title";
    isCompleted = false;
    onClick = () => {};
    wrapper = shallowMount(TodoItem, {
      propsData: {
        id: id,
        title: title,
        isCompleted: isCompleted,
        onClick: onClick
      }
    });
  });

  // Tiene un prop llamado 'id' que lo identifica.
  it("should have a prop named 'id' that idenfifies the component", () => {
    // Nos aseguramos que el prop 'id' es el mismo que hemos pasado al crear el componente.
    expect(wrapper.props("id")).toBe(id);
  });

  // Tiene un prop llamado 'title' que siempre se renderiza correctamente.
  it("should have a prop named 'title' that always renders", () => {
    // Nos aseguramos que el prop 'title' es el mismo que hemos pasado al crear el componente.
    expect(wrapper.props("title")).toBe(title);
    // Nos aseguramos que el título se está renderizando.
    expect(wrapper.text()).toMatch(title);
  });

  // Si 'isCompleted' es 'false', el texto del botón es 'complete'.
  it("should change button text to 'complete' when 'isCompleted' is false", () => {
    // Cuando 'isCompleted' es falso.
    wrapper.setProps({ isCompleted: false });
    // Nos aseguramos de que el texto del botón cambia a 'complete'.
    expect(wrapper.find("button").text()).toBe("complete");
  });

  // Si 'isCompleted' es 'true', el texto del botón es 'completed' y se añade una clase CSS al título.
  it("should change button text to 'completed' and disabled when 'isCompleted' is true", () => {
    // Cuando 'isCompleted' es verdadero.
    wrapper.setProps({ isCompleted: true });
    // Nos aseguramos de que el texto del botón cambia a 'completed'.
    expect(wrapper.find("button").text()).toBe("completed");
    // Nos aseguramos que el botón es deshabilitado.
    expect(wrapper.find("button").attributes("disabled")).toBeTruthy();
  });
});
