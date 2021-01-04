package reactspr.web.rest;
import reactspr.domain.Service;
import reactspr.repository.ServiceRepository;
import reactspr.web.rest.errors.BadRequestAlertException;

import io.github.jhipster.web.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing {@link reactspr.domain.Service}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class ServiceResource {

    private final Logger log = LoggerFactory.getLogger(ServiceResource.class);

    private static final String ENTITY_NAME = "Service";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final ServiceRepository serviceRepository;

    public ServiceResource(ServiceRepository serviceRepository) {
        this.serviceRepository = serviceRepository;
    }

    /**
     * {@code POST  /service} : Create a new Service.
     *
     * @param service the service to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with
     *         body the new service, or with status {@code 400 (Bad Request)} if the
     *         service has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/service")
    public ResponseEntity<Service> createService(@Valid @RequestBody Service service) throws URISyntaxException {
        log.debug("REST request to save Service : {}", service);
        if (service.getCserv() != null) {
            throw new BadRequestAlertException("A new Service cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Service result = serviceRepository.save(service);
        return ResponseEntity.created(new URI("/api/service/" + result.getCserv()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getCserv().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /service} : Updates an existing service.
     *
     * @param service the service to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body
     *         the updated service, or with status {@code 400 (Bad Request)} if the
     *         service is not valid, or with status
     *         {@code 500 (Internal Server Error)} if the service couldn't be
     *         updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/service")
    public ResponseEntity<Service> updateService(@Valid @RequestBody Service service) throws URISyntaxException {
        log.debug("REST request to update Service : {}", service);
        if (service.getCserv() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Service result = serviceRepository.save(service);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, 
                        service.getCserv().toString()))
            .body(result);
    }

    /**
     * {@code GET  /service} : get all the service.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list
     *         of service in body.
     */
    @GetMapping("/service")
    public List<Service> getAllService() {
        log.debug("REST request to get all Service");
        return serviceRepository.findAll();
    }

    /**
     * {@code GET  /service/:cserv} : get the "cserv" Service.
     *
     * @param cdir the cserv of the Service to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body
     *         the Service, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/service/{cserv}")
    public ResponseEntity<Service> getService(@PathVariable Long cserv) {
        log.debug("REST request to get Service : {}", cserv);
        Optional<Service> serv = serviceRepository.findById(cserv);
        return ResponseUtil.wrapOrNotFound(serv);
    }

    /**
     * {@code DELETE  /service/:cserv} : delete the "cserv" Service.
     *
     * @param cserv the cserv of the Service to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/service/{cserv}")
    public ResponseEntity<Void> deleteService(@PathVariable Long cserv) {
        log.debug("REST request to delete Service : {}", cserv);
        serviceRepository.deleteById(cserv);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, 
                cserv.toString())).build();
    }
}
