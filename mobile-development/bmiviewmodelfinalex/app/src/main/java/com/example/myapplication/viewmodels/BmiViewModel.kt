package com.example.myapplication.viewmodels

import androidx.lifecycle.ViewModel
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.State

class BmiViewModel : ViewModel() {
    private val _height = mutableStateOf("")
    val height: State<String> = _height

    private val _weight = mutableStateOf("")
    val weight: State<String> = _weight

    val bmi: Double?
        get() = _weight.value.toDoubleOrNull()?.let { w ->
            _height.value.toDoubleOrNull()?.let { h ->
                if (h > 0) w / (h * h) else null
            }
        }

    fun updateHeight(value: String) {
        _height.value = value
    }

    fun updateWeight(value: String) {
        _weight.value = value
    }
}