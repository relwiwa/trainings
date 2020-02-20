package com.springtutorials.payroll;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

/*  This class is marked with Spring’s @Component annotation so that
 *  it is automatically picked up by @SpringBootApplication. */
@Component
/*  It implements Spring Boot’s CommandLineRunner so that it gets run
 *  after all the beans are created and registered. */
public class DatabaseLoader implements CommandLineRunner {

	private final EmployeeRepository repository;

    /*  It uses constructor injection and autowiring to get Spring
     *  Data’s automatically created EmployeeRepository. */
	@Autowired
	public DatabaseLoader(EmployeeRepository repository) {
		this.repository = repository;
	}

	@Override
	public void run(String... strings) throws Exception {
		this.repository.save(new Employee("Frodo", "Baggins", "ring bearer"));
		this.repository.save(new Employee("Bilbo", "Baggins", "burglar"));
		this.repository.save(new Employee("Gandalf", "the Grey", "wizard"));
		this.repository.save(new Employee("Samwise", "Gamgee", "gardener"));
		this.repository.save(new Employee("Meriadoc", "Brandybuck", "pony rider"));
		this.repository.save(new Employee("Peregrin", "Took", "pipe smoker"));		
	}
}
