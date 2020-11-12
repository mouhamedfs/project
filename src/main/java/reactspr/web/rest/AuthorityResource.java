package reactspr.web.rest;

import reactspr.domain.Authority;
import reactspr.repository.AuthorityRepository;
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
 * REST controller for managing {@link reactspr.domain.Authority}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class AuthorityResource {

    private final Logger log = LoggerFactory.getLogger(AuthorityResource.class);

    private static final String ENTITY_NAME = "role";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final AuthorityRepository authorityRepository ; 

    public AuthorityResource(AuthorityRepository authorityRepository) {
        this.authorityRepository = authorityRepository;
    }

    /**
     * {@code POST  /authority} : Create a new authority.
     *
     * @param authority the authority to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new authority, or with status {@code 400 (Bad Request)}
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/authority")
    public ResponseEntity<Authority> createAuthority(@Valid @RequestBody Authority authority) throws URISyntaxException {
        log.debug("REST request to save Authority : {}", authority);
        Authority result = authorityRepository.save(authority);
        return ResponseEntity.created(new URI("/api/authority/"+result.getName()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getName()))
            .body(result);
    }

    /**
     * {@code PUT  /authority} : Updates an existing departement.
     *
     * @param authority the departement to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body
     *         the updated authority, or with status {@code 400 (Bad Request)} if
     *         the departement is not valid, or with status
     *         {@code 500 (Internal Server Error)} if the authority couldn't be
     *         updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/authority")
    public ResponseEntity<Authority> updateDepartement(@Valid @RequestBody Authority authority) throws URISyntaxException {
        log.debug("REST request to update Authority : {}", authority);
        if (authority.getName() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "namenull");
        }
        Authority result = authorityRepository.save(authority);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, 
                        authority.getName()))
            .body(result);
    }

    /**
     * {@code GET  /authority} : get all the authority.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list
     *         of authority in body.
     */
    @GetMapping("/authority")
    public List<Authority> getAllAuthority() {
        log.debug("REST request to get all Authority");
        return authorityRepository.findAll();
    }

    /**
     * {@code GET  /departements/:id} : get the "id" departement.
     *
     * @param id the id of the departement to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the departement, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/authority/{name}")
    public ResponseEntity<Authority> getAuthority(@PathVariable String name) {
        log.debug("REST request to get Departement : {}", name);
        Optional<Authority> authority = authorityRepository.findById(name);
        return ResponseUtil.wrapOrNotFound(authority);
    }

    /**
     * {@code DELETE  /authority/:name} : delete the "name" departement.
     *
     * @param name the name of the departement to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/authority/{name}")
    public ResponseEntity<Void> deleteAuthority(@PathVariable String name) {
        log.debug("REST request to delete Authority : {}", name);
        authorityRepository.deleteById(name);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, name)).build();
    }
}
