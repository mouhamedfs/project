package reactspr.web.rest;

import reactspr.domain.Famille;
import reactspr.domain.Site;
import reactspr.repository.FamilleRepository;
import reactspr.repository.SiteRepository;
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
public class SiteResource {

    private final Logger log = LoggerFactory.getLogger(SiteResource.class);

    private static final String ENTITY_NAME = "Site";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final SiteRepository  siteRepository;

    public SiteResource(SiteRepository siteRepository) {
        this.siteRepository = siteRepository;
    }

    /**
     * {@code POST  /site} : Create a new Site.
     *
     */
    /**
     * {@code POST  /site} : Create a new Site.
     *
     * @param site the Site to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with
     *         body the new Site, or with status {@code 400 (Bad Request)} if the
     *         Site has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/site")
    public ResponseEntity<Site> createSite(@RequestBody Site site) throws URISyntaxException {
        log.debug("REST request to save site : {}", site);
        if (site.getCodesite() != null) {
            throw new BadRequestAlertException("A new Site cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Site result = siteRepository.save(site);
        return ResponseEntity.created(new URI("/api/site/" + result.getCodesite()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getCodesite()))
            .body(result);
    }
    
    /**
     * {@code PUT  /site} : Updates an existing Site.
     *
     * @param site the Site to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body
     *         the updated Site, or with status {@code 400 (Bad Request)} if the
     *         Site is not valid, or with status {@code 500 (Internal Server Error)}
     *         if the Site couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */

    @PutMapping("/site")
    public ResponseEntity<Site> updateSite(@RequestBody Site site) throws URISyntaxException {
        log.debug("REST request to update site : {}", site);
        if (site.getCodesite() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Site result = siteRepository.save(site);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, 
                        site.getCodesite()))
            .body(result);
    }
    
    /**
     * {@code GET  /site} : get all the Site.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list
     *         of Site in body.
     */
    @GetMapping("/site")
    public List<Site> getAllSite() {
        log.debug("REST request to get all site");
        return siteRepository.findAll();
    }


    /**
     * {@code GET  /site/:codesite} : get the "codesite" site.
     *
     * @param codesite the codesite of the Site to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body
     *         the Site, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/site/{codesite}")
    public ResponseEntity<Site> getSite(@PathVariable String codesite) {
        log.debug("REST request to get Job : {}", codesite);
        Optional<Site> ssf = siteRepository.findById(codesite);
        return ResponseUtil.wrapOrNotFound(ssf);
    }

    /**
     * {@code DELETE  /site/:codesite} : delete the "codesite" Site.
     *
     * @param codesite the codesite of the Site to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/site/{codesite}")
    public ResponseEntity<Void> deleteSite(@PathVariable String codesite) {
        log.debug("REST request to delete Site : {}", codesite);
        siteRepository.deleteById(codesite);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, 
                codesite)).build();
    }
}
