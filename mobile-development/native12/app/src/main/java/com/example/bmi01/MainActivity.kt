package com.example.bmi01


import android.annotation.SuppressLint
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material3.Button
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.lifecycle.ViewModel
import com.example.bmi01.ui.theme.BMI01Theme


class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            BMI01Theme {
                Scaffold(modifier = Modifier.fillMaxSize()) { innerPadding ->
                    BMIAppScreen(modifier = Modifier.padding(innerPadding))
                }
            }
        }
    }

}


class BMIViewModel : ViewModel() {
    // States for weight, height, BMI result, and BMI category
    var weight = mutableStateOf("")
    var height = mutableStateOf("")
    var bmiResult = mutableStateOf("")
    var bmiCategory = mutableStateOf("")

    // Function to calculate BMI
    @SuppressLint("DefaultLocale")
    fun calculateBMI() {
        val weightValue = weight.value.toFloatOrNull()
        val heightValue = height.value.toFloatOrNull()

        if (weightValue != null && heightValue != null && heightValue > 0) {
            val bmi = weightValue / (heightValue * heightValue)
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
    val weight by bmiViewModel.weight
    val height by bmiViewModel.height
    val bmiResult by bmiViewModel.bmiResult
    val bmiCategory by bmiViewModel.bmiCategory

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
            onValueChange = { bmiViewModel.weight.value = it },
            label = { Text("Enter your weight (kg)") },
            keyboardOptions = KeyboardOptions.Default.copy(keyboardType = KeyboardType.Number),
            modifier = Modifier.fillMaxWidth().padding(bottom = 8.dp)
        )

        // Height Input Field
        OutlinedTextField(
            value = height,
            onValueChange = { bmiViewModel.height.value = it },
            label = { Text("Enter your height (m)") },
            keyboardOptions = KeyboardOptions.Default.copy(keyboardType = KeyboardType.Number),
            modifier = Modifier.fillMaxWidth().padding(bottom = 16.dp)
        )

        // Calculate Button
        Button(
            onClick = { bmiViewModel.calculateBMI() },
            modifier = Modifier.fillMaxWidth()
        ) {
            Text("Calculate BMI")
        }

        // Display BMI Result and Category
        Spacer(modifier = Modifier.height(16.dp))
        if (bmiResult.isNotEmpty()) {
            Text(text = "Your BMI is: $bmiResult", style = MaterialTheme.typography.bodyLarge)
            Spacer(modifier = Modifier.height(8.dp))
            if (bmiCategory.isNotEmpty()) {
                Text(text = "Category: $bmiCategory", style = MaterialTheme.typography.bodyLarge)
            }
        }
    }
}

fun viewModel(): BMIViewModel {

    return BMIViewModel() // Properly return an instance of your ViewModel
}


@Preview(showBackground = true)
    @Composable
    fun PreviewBMIAppScreen() {
        BMI01Theme {
            BMIAppScreen(modifier = Modifier.fillMaxSize())
        }
    }

