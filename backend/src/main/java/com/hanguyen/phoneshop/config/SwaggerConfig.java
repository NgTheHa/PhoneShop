package com.hanguyen.phoneshop.config;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeIn;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeType;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.info.License;
import io.swagger.v3.oas.annotations.security.SecurityScheme;
import io.swagger.v3.oas.annotations.servers.Server;

@OpenAPIDefinition(
        info = @Info(
                contact = @Contact(
                        name = "HaNguyen",
                        email = "hadt081202@gmail.com"
                ),
                description = "Open API documentation for phone-shop",
                title = "Open API specification - HaNguyen",
                version = "1.0",
                license = @License(
                        name = "License name",
                        url = "https://some-url.com"
                ),
                termsOfService = "Terms of service"
        ),
        servers = @Server(description = "Local ENV", url = "https://localhost:5454")
)
@SecurityScheme(
        name = "bearerAuth",
        description = "JWT Auth description",
        scheme = "bearer",
        type = SecuritySchemeType.HTTP,
        bearerFormat = "JWT",
        in = SecuritySchemeIn.HEADER
)
public class SwaggerConfig {
}
