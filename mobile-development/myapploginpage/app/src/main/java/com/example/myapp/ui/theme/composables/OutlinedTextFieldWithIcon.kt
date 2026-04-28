package com.example.myapp.ui.theme.composables

import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Icon
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.unit.dp

@Composable
fun OutlinedTextFieldWithIcon(label: String, icon: ImageVector,contentDescription: String?=null) {
    OutlinedTextField(
        value = "",
        onValueChange = {},
        modifier = Modifier.fillMaxWidth()
            .padding(horizontal = 16.dp),
        label = { Text(label) },
        trailingIcon = {
            Icon(icon,contentDescription = contentDescription)


        }
    )
}