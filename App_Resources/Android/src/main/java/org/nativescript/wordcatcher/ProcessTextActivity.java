package org.nativescript.wordcatcher;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;

public class ProcessTextActivity extends Activity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        Intent intent = getIntent();
        CharSequence text = intent.getCharSequenceExtra(Intent.EXTRA_PROCESS_TEXT);

        if (text != null) {
            Intent mainIntent = new Intent(this, com.tns.NativeScriptActivity.class);
            mainIntent.putExtra(Intent.EXTRA_PROCESS_TEXT, text.toString());
            startActivity(mainIntent);
        }

        finish();
    }

    public static CharSequence processText(CharSequence text, int menuItemId) {
        // This method is called when the user selects our app from the context menu
        // We don't modify the text, just return it as is
        return text;
    }
}