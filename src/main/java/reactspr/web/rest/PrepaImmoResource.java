package reactspr.web.rest;

import reactspr.domain.PrepaImmo;
import reactspr.domain.AuditEntity;
import reactspr.repository.PrepaImmoRepository;
import reactspr.security.SecurityUtils;
import reactspr.service.AuditEntityService;
import reactspr.service.PrepaImmoService;
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
import io.github.jhipster.web.util.PaginationUtil;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import java.net.URI;
import java.net.URISyntaxException;
import java.time.Instant;
import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing {@link reactspr.domain.Personne}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class PrepaImmoResource {

    private final Logger log = LoggerFactory.getLogger(PrepaImmoResource.class);

    private static final String ENTITY_NAME = "prepaImmo";

    Instant instant = Instant.now();

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final PrepaImmoRepository prepaImmoRepository;

   
    private final AuditEntityService auditEntityService;

    private final PrepaImmoService prepaImmoService ; 

    public PrepaImmoResource(PrepaImmoRepository prepaImmoRepository, AuditEntityService auditEntityService,
            PrepaImmoService prepaImmoService) {
        this.prepaImmoRepository = prepaImmoRepository;
        this.auditEntityService = auditEntityService;
        this.prepaImmoService = prepaImmoService;
    }

    

    

   
    /**
     * {@code POST  /prepaImmo} : Create a new Immo.
     *
     * @param prepaImmo the Immo to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with
     *         body the new Immo, or with status {@code 400 (Bad Request)} if the
     *         Immo has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PreAuthorize("hasAnyAuthority('ROLE_USER','ROLE_ADMIN','ROLE_PARAM')")
    @PostMapping("/prepaImmo")
    public ResponseEntity<PrepaImmo> createImmo(@RequestBody PrepaImmo prepaImmo) throws URISyntaxException {
        log.debug("REST request to save Immo : {}", prepaImmo);
        if (prepaImmo.getNumero() != null) {
            throw new BadRequestAlertException("A new Immo cannot already have an ID", ENTITY_NAME, "idexists");
        }
        PrepaImmo result = prepaImmoRepository.save(prepaImmo);
        AuditEntity au = new AuditEntity();
        au.setId(null);
        au.setActionDate(instant);
        au.setPrincipal(SecurityUtils.getcurrent_user());
        au.setActionTable(ENTITY_NAME);
        au.setActionType("Valider");
        au = auditEntityService.ajouter(au);
        return ResponseEntity.created(new URI("/api/prepaImmo/" + result.getNumero()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getNumero().toString()))
            .body(result);
    }
    /**
     * {@code PUT  /Immo} : Updates an existing Immo.
     *
     * @param prepaImmo the Immo to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body
     *         the updated Immo, or with status {@code 400 (Bad Request)} if the
     *         personne is not valid, or with status
     *         {@code 500 (Internal Server Error)} if the prepaImmo couldn't be
     *         updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PreAuthorize("hasAnyAuthority('ROLE_USER','ROLE_ADMIN','ROLE_MANAGER')")
    @PutMapping("/prepaImmo")
    public ResponseEntity<PrepaImmo> updatePrepaImmo(@RequestBody PrepaImmo immo) throws URISyntaxException {
        log.debug("REST request to update an Immo : {}", immo);
        if (immo.getNumero() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        PrepaImmo result = prepaImmoRepository.save(immo);
        AuditEntity au = new AuditEntity();
        au.setId(null);
        au.setActionDate(instant);
        au.setPrincipal(SecurityUtils.getcurrent_user());
        au.setActionTable(ENTITY_NAME);
        au.setActionType("Modifier");
        au = auditEntityService.ajouter(au);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, 
                        immo.getNumero().toString()))
            .body(result);
    }

    /**
     * {@code GET  /prepaImmo} : get all the Immo.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list
     *         of personnes in body.
     */
    @GetMapping("/prepaImmo")
    public ResponseEntity<List<PrepaImmo>> getAll(Pageable pageable) {
        Page<PrepaImmo> page = prepaImmoService.getAllManagedPage(pageable);
        HttpHeaders headers = PaginationUtil
                .generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), page);
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }

    
    
    /*
    @GetMapping("/prepaImmo")
    public List<PrepaImmo> getAll() {
        log.debug("REST request to get all Immobilisation");
        return prepaImmoRepository.findAll();
    }

    */
    /**
     * {@code GET  /prepaImmo/:numero} : get the "numero" Immo.
     *
     * @param id the id of the prepaImmo to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body
     *         the prepaImmo, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/prepaImmo/{numero}")
    public ResponseEntity<PrepaImmo> getPrepaImmo(@PathVariable Long numero) {
        log.debug("REST request to get Immo : {}", numero);
        Optional<PrepaImmo> prepaImmo = prepaImmoRepository.findById(numero);
        return ResponseUtil.wrapOrNotFound(prepaImmo);
    }

    /**
     * {@code DELETE  /prepaImmo/:numero} : delete the "numero" prepaImmo.
     *
     * @param numero the numero of the PrepaImmo to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @PreAuthorize("hasAnyAuthority('ROLE_USER','ROLE_ADMIN','ROLE_PARAM')")
    @DeleteMapping("/prepaImmo/{numero}")
    public ResponseEntity<Void> deletePrepaImmo(@PathVariable Long numero) {
        log.debug("REST request to delete Immo : {}", numero);
        prepaImmoRepository.deleteById(numero);
        AuditEntity au = new AuditEntity();
        au.setId(null);
        au.setActionDate(instant);
        au.setPrincipal(SecurityUtils.getcurrent_user());
        au.setActionTable(ENTITY_NAME);
        au.setActionType("Supprimer");
        au = auditEntityService.ajouter(au);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, 
                numero.toString())).build();
    }
}
