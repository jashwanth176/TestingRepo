package demo;

import java.util.List;
import com.example.Widget;

public class Demo {
    private final List<String> values;

    public Demo(List<String> values) {
        this.values = values;
    }

    public Widget createWidget() {
        return new Widget();
    }

    public int size() {
        return values.size();
    }

    public boolean isEmpty() {
        return values.isEmpty();
    }
}
