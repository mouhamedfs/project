package reactspr.web.rest;

import reactspr.domain.Famille;
import reactspr.repository.FamilleRepository;
import reactspr.web.rest.errors.BadRequestAlertException;

import io.github.jhipster.web.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing {@link reactspr.domain.SousFamille}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class FamilleResource {

    private final Logger log = LoggerFactory.getLogger(FamilleResource.class);

    private static final String ENTITY_NAME = "Famille";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final FamilleRepository  familleRepository;

    public FamilleResource(FamilleRepository familleRepository) {
        this.familleRepository = familleRepository;
    }

    /**
     * {@code POST  /famille} : Create a new Famille.
     *
     */
    /**
     * {@code POST  /famille} : Create a new Famille.
     *
     * @param famille the Famille to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with
     *         body the new Famille, or with status {@code 400 (Bad Request)} if the
     *         Famille has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/famille")
    public ResponseEntity<Famille> createFamille(@RequestBody Famille famille) throws URISyntaxException {
        log.debug("REST request to save paramPass : {}", famille);
        if (famille.getCfam() != null) {
            throw new BadRequestAlertException("A new Famille cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Famille result = familleRepository.save(famille);
        return ResponseEntity.created(new URI("/api/famille/" + result.getCfam()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getCfam()))
            .body(result);
    }
    
    /**
     * {@code PUT  /famille} : Updates an existing Famille.
     *
     * @param famille the Famille to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body
     *         the updated Famille, or with status {@code 400 (Bad Request)} if
     *         the SousFamille is not valid, or with status
     *         {@code 500 (Internal Server Error)} if the Famille couldn't be
     *         updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */

    @PutMapping("/famille")
    public ResponseEntity<Famille> updateFamille(@RequestBody Famille famille) throws URISyntaxException {
        log.debug("REST request to update paramPass : {}", famille);
        if (famille.getCfam() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Famille result = familleRepository.save(famille);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, 
                        famille.getCfam()))
            .body(result);
    }
    
    /**
     * {@code GET  /famille} : get all the Famille.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list
     *         of Famille in body.
     */
    @GetMapping("/famille")
    public List<Famille> getAllFam() {
        log.debug("REST request to get all ParamPass");
        return familleRepository.findAll();
    }


    /**
     * {@code GET  /famille/:cfam} : get the "cfam" SousFamille.
     *
     * @param cfam the cfam of the Famille to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body
     *         the Famille, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/famille/{cfam}")
    public ResponseEntity<Famille> getFamille(@PathVariable String cfam) {
        log.debug("REST request to get Job : {}", cfam);
        Optional<Famille> ssf = familleRepository.findById(cfam);
        return ResponseUtil.wrapOrNotFound(ssf);
    }

    /**
     * {@code DELETE  /famille/:cfam} : delete the "cfam" Famille.
     *
     * @param cfam the cfam of the Famille to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/famille/{cfam}")
    public ResponseEntity<Void> deleteFamille(@PathVariable String cfam) {
        log.debug("REST request to delete Param : {}", cfam);
        familleRepository.deleteById(cfam);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, 
                cfam)).build();
    }
}
