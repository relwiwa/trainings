package com.springtutorials.jpadataaccess;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class JpaDataAccessApplication {

	private static final Logger log = LoggerFactory.getLogger(JpaDataAccessApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(JpaDataAccessApplication.class, args);
	}

	@Bean
	/*	- First, it fetches the CustomerRepository from the Spring application context.
	 *	- The demo() method returns a CommandLineRunner bean that automatically runs the
	 *	  code when the application launches. */
	public CommandLineRunner demo(CustomerRepository repository) {
		return (args) -> {
			// save a few customers
			repository.save(new Customer("Jack", "Bauer"));
			repository.save(new Customer("Chloe", "O'Brian"));
			repository.save(new Customer("Kim", "Bauer"));
			repository.save(new Customer("David", "Palmer"));
			repository.save(new Customer("Michelle", "Dessler"));

			// fetch all customers
			log.info("Customers found with findAll()");
			log.info("--------------------------------");
			for (Customer customer : repository.findAll()) {
				log.info(customer.toString());
			}
			log.info("");

			// fetch an individual customer by ID
			Customer customer = repository.findById(1L);
			log.info("Customers found with findById(1L)");
			log.info("--------------------------------");
			log.info(customer.toString());
			log.info("");

			// fetch customers by last name
			log.info("Customers found with findByLastname('Bauer')");
			log.info("--------------------------------");
			repository.findByLastName("Bauer").forEach(item -> {
				log.info(item.toString());
			});
			log.info("");
		};
	}
}
