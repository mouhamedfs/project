package reactspr.web.rest;

import reactspr.domain.AuditEntity;
import reactspr.domain.Immobilisation;
import reactspr.repository.ImmobilisationRepository;
import reactspr.security.SecurityUtils;
import reactspr.service.AuditEntityService;
import reactspr.web.rest.errors.BadRequestAlertException;
import io.github.jhipster.web.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.time.Instant;
import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing {@link reactspr.domain.Personne}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class ImmobilisationResource {

    private final Logger log = LoggerFactory.getLogger(ImmobilisationResource.class);

    private static final String ENTITY_NAME = "Immobilisation";

    private AuditEntity auditEntity;
    Instant instant = Instant.now();

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final ImmobilisationRepository immobilisationRepository ;
    private final AuditEntityService auditEntityService;

    public ImmobilisationResource(ImmobilisationRepository immobilisationRepository,
            AuditEntityService auditEntityService) {
        this.immobilisationRepository = immobilisationRepository;
        this.auditEntityService = auditEntityService;
    }

    /**
     * {@code POST  /immo} : Create a new Immobilisation.
     *
     * @param Immobilisation the Immobilisation to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with
     *         body the new Immobilisation, or with status {@code 400 (Bad Request)}
     *         if the Immobilisation has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/immo")
    public ResponseEntity<Immobilisation> createImmo(@RequestBody Immobilisation immobilisation) throws URISyntaxException {
        log.debug("REST request to save Immo : {}", immobilisation);
        if (immobilisation.getImmo() != null) {
            throw new BadRequestAlertException("A new Immo cannot already have an ID", ENTITY_NAME, "idexists");
        }
            
        Immobilisation result = immobilisationRepository.save(immobilisation);
        AuditEntity au = new AuditEntity();
        au.setId(null);
        au.setActionDate(instant);
        au.setPrincipal(SecurityUtils.getcurrent_user());
        au.setActionTable(ENTITY_NAME);
        au.setActionType("Valider");
        au = auditEntityService.ajouter(au);
        return ResponseEntity.created(new URI("/api/immo/" + result.getImmo()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getImmo().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /Immo} : Updates an existing Immobilisation.
     *
     * @param Immobilisation the Immobilisation to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body
     *         the updated Immobilisation, or with status {@code 400 (Bad Request)}
     *         if the Immobilisation is not valid, or with status
     *         {@code 500 (Internal Server Error)} if the prepaImmo couldn't be
     *         updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PreAuthorize("hasAnyAuthority('ROLE_USER','ROLE_ADMIN','ROLE_MANAGER')")
    @PutMapping("/immo")
    public ResponseEntity<Immobilisation> updatePrepaImmo(@RequestBody Immobilisation immobilisation) throws URISyntaxException {
        log.debug("REST request to update an Immo : {}", immobilisation);
        if (immobilisation.getImmo() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Immobilisation result = immobilisationRepository.save(immobilisation);
        AuditEntity au = new AuditEntity();
        au.setId(null);
        au.setActionDate(instant);
        au.setPrincipal(SecurityUtils.getcurrent_user());
        au.setActionTable(ENTITY_NAME);
        au.setActionType("Modifier");
        au = auditEntityService.ajouter(au);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, 
                        immobilisation.getImmo().toString()))
            .body(result);
    }

    /**
     * {@code GET  /immo} : get all the Immobilisation.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list
     *         of /immobilisation in body.
     */
    @GetMapping("/immo")
    public List<Immobilisation> getAllImmo() {
        log.debug("REST request to get all Immobilisation");
        return immobilisationRepository.findAll();
    }

    /**
     * {@code GET  /immo/:immo} : get the "numero" Immo.
     *
     * @param id the id of the Immo to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body
     *         the prepaImmo, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/immo/{immo}")
    public ResponseEntity<Immobilisation> getImmo(@PathVariable Long immo) {
        log.debug("REST request to get Immo : {}", immo);
        Optional<Immobilisation> immobilisation = immobilisationRepository.findById(immo);
        return ResponseUtil.wrapOrNotFound(immobilisation);
    }

    /**
     * {@code DELETE  /immo/:immo} : delete the "immo" Immobilisation.
     *
     * @param immo the numero of the Immobilisation to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @PreAuthorize("hasAnyAuthority('ROLE_USER','ROLE_ADMIN','ROLE_PARAM')")
    @DeleteMapping("/immo/{immo}")
    public ResponseEntity<Void> deleteImmo(@PathVariable Long immo) {
        log.debug("REST request to delete Immobilisation : {}", immo);
        immobilisationRepository.deleteById(immo);
        AuditEntity au = new AuditEntity();
        au.setId(null);
        au.setActionDate(instant);
        au.setPrincipal(SecurityUtils.getcurrent_user());
        au.setActionTable(ENTITY_NAME);
        au.setActionType("Supprimer");
        au = auditEntityService.ajouter(au);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, 
                immo.toString())).build();
    }
}
