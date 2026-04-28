package com.example.myapp

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Lock
import androidx.compose.material.icons.filled.Person
import androidx.compose.material3.Scaffold
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Alignment.Companion.Center
import androidx.compose.ui.Modifier
import com.example.myapp.ui.theme.MYappTheme
import com.example.myapp.ui.theme.composables.OutlinedTextFieldWithIcon

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {

        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            MYappTheme {
                Scaffold(modifier = Modifier.fillMaxSize()) { innerPadding ->

                Box (modifier = Modifier
                    .fillMaxSize()
                    .padding(innerPadding),
                    contentAlignment = Center
                ){
                        ThemeDemo()
                    }
                }
            }
        }
    }
}


@Composable
fun ThemeDemo(modifier: Modifier = Modifier ) {
    Column(
        modifier = modifier,
        verticalArrangement = Arrangement.Center, // Centers children vertically
        horizontalAlignment = Alignment.CenterHorizontally // Centers children horizontally

    ) {

        OutlinedTextFieldWithIcon("UserName", Icons.Filled.Person, "person icon")
        OutlinedTextFieldWithIcon("Password", Icons.Filled.Lock)
    }
}







//        Text(
//            text = " My App",
//            fontSize = 24.sp,
//            color = Color.Blue,
//            modifier = Modifier.fillMaxSize(),
//            textAlign = TextAlign.Center
//        )
//    }




