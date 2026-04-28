package com.example.myapplication

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Scaffold
import androidx.compose.runtime.Composable
import androidx.compose.ui.tooling.preview.Preview
import androidx.lifecycle.viewmodel.compose.viewModel
import com.example.myapplication.screens.BmiScreen
import com.example.myapplication.ui.theme.MyApplicationTheme
import com.example.myapplication.viewmodels.BmiViewModel
import  androidx.compose.ui.Modifier


class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            MyApplicationTheme {
                val bmiViewModel: BmiViewModel = viewModel() // Initialize ViewModel

                Scaffold { innerPadding ->
                    BmiScreen(
                        viewModel = bmiViewModel,
                        modifier = Modifier.padding(innerPadding)
                    )
                }
            }
        }
    }
}



@Preview(showBackground = true)
@Composable
fun BmiScreenPreview() {
    MyApplicationTheme {
        BmiScreen(viewModel = BmiViewModel())
    }
}
