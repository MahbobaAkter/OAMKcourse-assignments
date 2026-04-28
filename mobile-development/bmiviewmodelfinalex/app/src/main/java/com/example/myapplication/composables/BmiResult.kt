package com.example.myapplication.composables


import android.annotation.SuppressLint
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable

@SuppressLint("DefaultLocale")
@Composable
fun BmiResult(bmi: Double?) {
    Text("Your BMI is ${bmi?.let { String.format("%.1f", it) } ?: "-"}", style = MaterialTheme.typography.bodyLarge)
}