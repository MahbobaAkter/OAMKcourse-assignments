package com.example.myapplication.screens
import androidx.compose.foundation.layout.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.example.myapplication.composables.BmiInputField
import com.example.myapplication.composables.BmiResult
import com.example.myapplication.viewmodels.BmiViewModel

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun BmiScreen(viewModel: BmiViewModel, modifier: Modifier = Modifier) {
    Scaffold(
        topBar = {
            TopAppBar(

                title = {
                    Box(modifier = Modifier.fillMaxWidth(), contentAlignment = Alignment.Center) {
                        Text("BMI Calculator")
                    }
                },

                colors = TopAppBarDefaults.topAppBarColors(
                    containerColor = MaterialTheme.colorScheme.background,
                    titleContentColor = MaterialTheme.colorScheme.primary
                )
            )
        }
    ) { paddingValues ->
        Column(
            modifier = Modifier
                .padding(paddingValues)
                .padding(horizontal = 16.dp),
        ) {
            BmiInputField("Height", viewModel.height.value, viewModel::updateHeight)
            Spacer(modifier = Modifier.height(8.dp))
            BmiInputField("Weight", viewModel.weight.value, viewModel::updateWeight)
            Spacer(modifier = Modifier.height(16.dp))
            BmiResult(viewModel.bmi)
        }
    }
}