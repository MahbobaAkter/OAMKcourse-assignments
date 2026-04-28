@file:Suppress("UNUSED_VARIABLE", "NAME_SHADOWING")

package com.example.bmi01

import android.annotation.SuppressLint
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.lifecycle.ViewModel
import com.example.bmi01.ui.theme.BMI01Theme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            BMI01Theme {
                Scaffold(modifier = Modifier.fillMaxSize()) { innerPadding ->
                    BMIAppScreen(
                        modifier = Modifier.padding(innerPadding)
                    )
                }
            }
        }
    }
}


// ViewModel to manage the BMI app state
class BMIViewModel : ViewModel() {
    // States for weight, height, BMI result, and BMI category
    private var weight = mutableStateOf("")
    private var height = mutableStateOf("")
    private var bmiResult = mutableStateOf("")
    private var bmiCategory = mutableStateOf("")



    // Function to calculate BMI
    @SuppressLint("DefaultLocale")
    fun calculateBMI() {
        val weightValue = weight.value.toFloatOrNull()
        val heightValue = height.value.toFloatOrNull()


        if (weightValue != null && heightValue != null && heightValue > 0) {
            val bmi = weightValue / (heightValue * heightValue) // BMI formula
            bmiResult.value = String.format("%.2f", bmi)



            // Determine BMI category
            bmiCategory.value = when {
                bmi < 18.5 -> "Underweight"
                bmi in 18.5..24.9 -> "Normal weight"
                bmi in 25.0..29.9 -> "Overweight"
                else -> "Obesity"
            }
        } else {
            bmiResult.value = "Invalid Input"
            bmiCategory.value = ""
        }
    }
}





@Composable
fun  BMIAppScreen(modifier: Modifier = Modifier) {
    // Use the BMIViewModel
    val bmiViewModel: BMIViewModel = viewModel()




    // Observe the state from the ViewModel

    var weight by remember { mutableStateOf("") }
    var height by remember { mutableStateOf("") }


   val weightValue = weight.toFloatOrNull()?:0.0f
    val heightValue=height.toFloatOrNull()?:0.0f

    var bmiResult = ""


    if(heightValue > 0) {
        bmiResult = (weightValue / (heightValue *heightValue)).toString()

    }
    else{
        val bmiResult = "Invalid Input"
    }




    // Layout for BMI input and results
    Column(
        modifier = modifier
            .fillMaxSize()
            .padding(16.dp),
        verticalArrangement = Arrangement.Center
    ) {
           // Weight Input Field
                OutlinedTextField(
                    value = weight,
                    onValueChange = {weight = it },

                    label = { Text(text ="Enter your weight (kg)") },
                    keyboardOptions = KeyboardOptions.Default.copy(keyboardType = KeyboardType.NumberPassword),
                    modifier = Modifier.fillMaxWidth().padding(bottom = 8.dp)
                )

                // Height Input Field
                OutlinedTextField(
                    value = height,
                    onValueChange = {height = it },
                    label = {
                        Text(text ="Enter your height (m)")},
                        keyboardOptions =
                            KeyboardOptions.Default.copy(keyboardType = KeyboardType.NumberPassword),

                        modifier = Modifier.fillMaxWidth().padding(bottom = 16.dp)
                )

        // Display BMI Result and Category
        Text(
            text = "BMI result is  : $bmiResult",
            modifier = Modifier.padding(top = 16.dp)
        )




    }

    }


    fun viewModel(): BMIViewModel {
        return BMIViewModel() // Properly return an instance of your ViewModel
    }


// { Text(text ="Calculate BMI")
// Display BMI Result and Category




    @Preview(showBackground = true)
    @Composable
    fun BMIAppScreen() {
        BMI01Theme {

        }
    }
